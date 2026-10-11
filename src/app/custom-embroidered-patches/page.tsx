import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PatchLanding from '@/components/patches/PatchLanding';
import { patchTypes } from '@/lib/patches';

const patch = patchTypes.find((p) => p.slug === 'custom-embroidered-patches');

export const metadata: Metadata = patch
    ? {
          title: patch.metaTitle,
          description: patch.metaDescription,
          alternates: { canonical: '/custom-embroidered-patches' },
          openGraph: {
              title: patch.metaTitle,
              description: patch.metaDescription,
              url: '/custom-embroidered-patches',
              ...(patch.heroImage ? { images: [patch.heroImage] } : {}),
          },
      }
    : {};

export default function Page() {
    if (!patch) notFound();
    return <PatchLanding patch={patch} />;
}
