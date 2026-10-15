'use client';

import * as React from 'react';
import * as THREE from 'three';
import { useRef, useState, useEffect, memo, Suspense, type ReactNode } from 'react';
import { Canvas, createPortal, useFrame, useThree, type ThreeElements } from '@react-three/fiber';
import {
  useFBO,
  useGLTF,
  useScroll,
  Image,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
  Text
} from '@react-three/drei';
import { easing } from 'maath';

const IMAGE_URLS = [
  'https://images.unsplash.com/photo-1783394327207-acf441e37dda?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzR8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzZ8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1782094002386-7d9ae1f49f50?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDB8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1781242629922-6f39cc3671cd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1779684474703-5c0519bcf7e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTJ8fHxlbnwwfHx8fHw%3D'
];

type Mode = 'lens' | 'bar' | 'cube';

interface NavItem {
  label: string;
  link: string;
}

type ModeProps = Record<string, unknown>;

interface FluidGlassProps {
  mode?: Mode;
  lensProps?: ModeProps;
  barProps?: ModeProps;
  cubeProps?: ModeProps;
  backgroundColor?: string;
  textColor?: string;
  showContent?: boolean;
  scale?: number;
  ior?: number;
  thickness?: number;
  transmission?: number;
  roughness?: number;
  chromaticAberration?: number;
  anisotropy?: number;
  lockToBottom?: boolean;
  followPointer?: boolean;
  fitNavbar?: boolean;
  [key: string]: unknown;
}

export default function FluidGlass({
  mode = 'lens',
  lensProps = {},
  barProps = {},
  cubeProps = {},
  backgroundColor = '#120F17',
  textColor = '#ffffff',
  showContent = false,
  scale,
  ior,
  thickness,
  transmission,
  roughness,
  chromaticAberration,
  anisotropy,
  lockToBottom,
  followPointer,
  fitNavbar,
  ...rest
}: FluidGlassProps) {
  const Wrapper = mode === 'bar' ? Bar : mode === 'cube' ? Cube : Lens;
  
  const directProps: Record<string, unknown> = {
    ...(scale !== undefined && { scale }),
    ...(ior !== undefined && { ior }),
    ...(thickness !== undefined && { thickness }),
    ...(transmission !== undefined && { transmission }),
    ...(roughness !== undefined && { roughness }),
    ...(chromaticAberration !== undefined && { chromaticAberration }),
    ...(anisotropy !== undefined && { anisotropy }),
    ...(lockToBottom !== undefined && { lockToBottom }),
    ...(followPointer !== undefined && { followPointer }),
    ...(fitNavbar !== undefined && { fitNavbar }),
    ...rest
  };

  const rawOverrides = {
    ...(mode === 'bar' ? barProps : mode === 'cube' ? cubeProps : lensProps),
    ...directProps
  };

  const {
    navItems = [
      { label: 'Home', link: '' },
      { label: 'About', link: '' },
      { label: 'Contact', link: '' }
    ],
    ...modeProps
  } = rawOverrides;

  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 15 }}
      gl={{ alpha: true, toneMapping: THREE.NoToneMapping, antialias: true }}
      style={{ 
        width: '100%',
        height: '100%',
        background: 'transparent',
        pointerEvents: 'none'
      }}
    >
      <React.Suspense fallback={null}>
        <ambientLight intensity={2.0} />
        <directionalLight position={[10, 15, 10]} intensity={3.0} color="#ffffff" />
        <directionalLight position={[-10, 10, 5]} intensity={1.8} color="#e0f2fe" />
        <pointLight position={[0, 0, 12]} intensity={1.5} color="#ffffff" />
        
        {showContent ? (
          <ScrollControls damping={0.2} pages={3} distance={0.4}>
            {mode === 'bar' && <NavItems items={navItems as NavItem[]} textColor={textColor} />}
            <Wrapper modeProps={modeProps} backgroundColor={backgroundColor} lockToBottom={lockToBottom} showContent={showContent}>
              <Scroll>
                <Typography textColor={textColor} />
                <Images />
              </Scroll>
              <Scroll html />
              <Preload />
            </Wrapper>
          </ScrollControls>
        ) : (
          <Wrapper modeProps={modeProps} backgroundColor="transparent" lockToBottom={lockToBottom} showContent={false}>
            <Preload />
          </Wrapper>
        )}
      </React.Suspense>
    </Canvas>
  );
}

type MeshProps = ThreeElements['mesh'];

interface ModeWrapperProps extends MeshProps {
  children?: ReactNode;
  glb: string;
  geometryKey: string;
  lockToBottom?: boolean;
  followPointer?: boolean;
  modeProps?: ModeProps;
  backgroundColor?: string;
  showContent?: boolean;
}

type ModeComponentProps = Omit<ModeWrapperProps, 'glb' | 'geometryKey'>;

interface ZoomMaterial extends THREE.Material {
  zoom: number;
}

interface ZoomMesh extends THREE.Mesh<THREE.BufferGeometry, ZoomMaterial> {}

type ZoomGroup = THREE.Group & { children: ZoomMesh[] };

const ModeWrapper = memo(function ModeWrapper({
  children,
  glb,
  geometryKey,
  lockToBottom = false,
  followPointer = false,
  modeProps = {},
  backgroundColor = 'transparent',
  showContent = false,
  ...props
}: ModeWrapperProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const { nodes } = useGLTF(glb);
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState<THREE.Scene>(() => new THREE.Scene());
  const geoWidthRef = useRef<number>(1);
  const geoHeightRef = useRef<number>(1);

  useEffect(() => {
    const geo = (nodes[geometryKey] as THREE.Mesh)?.geometry;
    if (geo) {
      geo.computeBoundingBox();
      geoWidthRef.current = geo.boundingBox!.max.x - geo.boundingBox!.min.x || 1;
      geoHeightRef.current = geo.boundingBox!.max.z - geo.boundingBox!.min.z || 1;
    }
  }, [nodes, geometryKey]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    const isNavbarFit = (modeProps as { fitNavbar?: boolean }).fitNavbar ?? (v.width / v.height > 3);
    const destX = followPointer ? (pointer.x * v.width) / 2 : 0;
    const destY = isNavbarFit ? 0 : lockToBottom ? -v.height / 2 + 0.2 : followPointer ? (pointer.y * v.height) / 2 : 0;
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);

    if (!showContent) {
      ref.current.position.set(0, 0, 15);
      return;
    }

    if (isNavbarFit) {
      const scaleX = (v.width * 1.35) / geoWidthRef.current;
      const scaleY = (v.height * 1.08) / geoHeightRef.current;
      ref.current.scale.set(scaleX, scaleY, scaleY);
    } else if ((modeProps as { scale?: number }).scale != null) {
      ref.current.scale.setScalar((modeProps as { scale?: number }).scale!);
    } else {
      const maxWorld = v.width * 0.9;
      const desired = maxWorld / geoWidthRef.current;
      ref.current.scale.setScalar(Math.min(0.15, desired));
    }

    if (showContent) {
      gl.setClearColor(0x000000, 0);
      gl.setRenderTarget(buffer);
      gl.render(scene, camera);
      gl.setRenderTarget(null);
      gl.setClearColor(0x000000, 0);
    }
  });

  const { scale, ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps as {
    scale?: number;
    ior?: number;
    thickness?: number;
    anisotropy?: number;
    chromaticAberration?: number;
    [key: string]: unknown;
  };

  return (
    <>
      {showContent && (
        <>
          {createPortal(
            <>
              <mesh position={[0, 0, -5]} scale={[vp.width * 2, vp.height * 2, 1]}>
                <planeGeometry />
                <meshBasicMaterial color={backgroundColor} toneMapped={false} />
              </mesh>
              {children}
            </>,
            scene
          )}
          <mesh scale={[vp.width, vp.height, 1]}>
            <planeGeometry />
            <meshBasicMaterial map={buffer.texture} transparent toneMapped={false} />
          </mesh>
        </>
      )}
      {showContent ? (
        <mesh
          ref={ref}
          scale={scale ?? 0.15}
          rotation-x={Math.PI / 2}
          geometry={(nodes[geometryKey] as THREE.Mesh)?.geometry}
          {...props}
        >
          <MeshTransmissionMaterial
            buffer={buffer.texture}
            ior={ior ?? 1.15}
            thickness={thickness ?? 10}
            anisotropy={anisotropy ?? 0.01}
            chromaticAberration={chromaticAberration ?? 0.1}
            transmission={1}
            roughness={0}
            color="#ffffff"
            attenuationColor="#ffffff"
            attenuationDistance={1}
            {...(typeof extraMat === 'object' && extraMat !== null ? extraMat : {})}
          />
        </mesh>
      ) : (
        <mesh
          ref={ref}
          rotation-z={Math.PI / 2}
          position={[0, 0, 15]}
          {...props}
        >
          <cylinderGeometry args={[vp.height * 0.45, vp.height * 0.45, vp.width * 1.6, 32]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transparent={true}
            opacity={0.08}
            roughness={0.12}
            metalness={0.02}
            clearcoat={1.0}
            clearcoatRoughness={0.08}
            reflectivity={0.65}
            transmission={0}
          />
        </mesh>
      )}
    </>
  );
});

function Lens({ modeProps, ...p }: ModeComponentProps) {
  return <ModeWrapper glb="/assets/3d/lens.glb" geometryKey="Cylinder" followPointer modeProps={modeProps} {...p} />;
}

function Cube({ modeProps, ...p }: ModeComponentProps) {
  return <ModeWrapper glb="/assets/3d/cube.glb" geometryKey="Cube" followPointer modeProps={modeProps} {...p} />;
}

function Bar({ modeProps = {}, lockToBottom, ...p }: ModeComponentProps) {
  const defaultMat = {
    transmission: 1,
    roughness: 0,
    thickness: 10,
    ior: 1.15,
    color: '#ffffff',
    attenuationColor: '#ffffff',
    attenuationDistance: 0.25
  };

  return (
    <ModeWrapper
      glb="/assets/3d/bar.glb"
      geometryKey="Cube"
      lockToBottom={lockToBottom ?? false}
      followPointer={false}
      modeProps={{ ...defaultMat, ...modeProps }}
      {...p}
    />
  );
}

function NavItems({ items, textColor }: { items: NavItem[]; textColor: string }) {
  const group = useRef<THREE.Group>(null!);
  const { viewport, camera } = useThree();

  const DEVICE = {
    mobile: { max: 639, spacing: 0.2, fontSize: 0.035 },
    tablet: { max: 1023, spacing: 0.24, fontSize: 0.045 },
    desktop: { max: Infinity, spacing: 0.3, fontSize: 0.045 }
  };
  const getDevice = () => {
    const w = window.innerWidth;
    return w <= DEVICE.mobile.max ? 'mobile' : w <= DEVICE.tablet.max ? 'tablet' : 'desktop';
  };

  const [device, setDevice] = useState<keyof typeof DEVICE>(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { spacing, fontSize } = DEVICE[device];

  useFrame(() => {
    if (!group.current) return;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
    group.current.position.set(0, -v.height / 2 + 0.2, 15.1);

    group.current.children.forEach((child, i) => {
      child.position.x = (i - (items.length - 1) / 2) * spacing;
    });
  });

  const handleNavigate = (link: string) => {
    if (!link) return;
    link.startsWith('#') ? (window.location.hash = link) : (window.location.href = link);
  };

  return (
    <group ref={group} renderOrder={10}>
      {items.map(({ label, link }) => (
        <Text
          key={label}
          fontSize={fontSize}
          color={textColor}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0}
          outlineBlur="20%"
          outlineColor="#000"
          outlineOpacity={0.5}
          renderOrder={10}
          onClick={e => {
            e.stopPropagation();
            handleNavigate(link);
          }}
          onPointerOver={() => (document.body.style.cursor = 'pointer')}
          onPointerOut={() => (document.body.style.cursor = 'auto')}
        >
          {label}
        </Text>
      ))}
    </group>
  );
}

function Images() {
  const group = useRef<ZoomGroup>(null!);
  const data = useScroll();
  const { height } = useThree(s => s.viewport);

  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[4].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
  });

  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[3, height / 1.1]} url={IMAGE_URLS[0]} />
      <Image position={[2, 0, 3]} scale={3} url={IMAGE_URLS[1]} />
      <Image position={[-2.05, -height, 6]} scale={[1, 3]} url={IMAGE_URLS[2]} />
      <Image position={[-0.6, -height, 9]} scale={[1, 2]} url={IMAGE_URLS[3]} />
      <Image position={[0.75, -height, 10.5]} scale={1.5} url={IMAGE_URLS[4]} />
    </group>
  );
}

function Typography({ textColor }: { textColor: string }) {
  const DEVICE = {
    mobile: { fontSize: 0.2 },
    tablet: { fontSize: 0.4 },
    desktop: { fontSize: 0.6 }
  };
  const getDevice = () => {
    const w = window.innerWidth;
    return w <= 639 ? 'mobile' : w <= 1023 ? 'tablet' : 'desktop';
  };

  const [device, setDevice] = useState<keyof typeof DEVICE>(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { fontSize } = DEVICE[device];

  return (
    <Text
      position={[0, 0, 12]}
      fontSize={fontSize}
      letterSpacing={-0.05}
      outlineWidth={0}
      outlineBlur="20%"
      outlineColor="#000"
      outlineOpacity={0.5}
      color={textColor}
      anchorX="center"
      anchorY="middle"
    >
      React Bits
    </Text>
  );
}
