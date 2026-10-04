import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '6px',
          fontWeight: 800,
          border: '2px solid #19c23b',
        }}
      >
        <span style={{ color: '#19c23b', marginRight: '1px' }}>G</span>F
      </div>
    ),
    {
      ...size,
    }
  );
}
