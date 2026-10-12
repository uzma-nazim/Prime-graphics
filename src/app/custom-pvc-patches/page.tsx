import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PatchLanding from '@/components/patches/PatchLanding';
import { patchTypes } from '@/lib/patches';
import { pageMetadata } from '@/lib/seo';

const patch = patchTypes.find((p) => p.slug === 'custom-pvc-patches');

export const metadata: Metadata = patch
    ? pageMetadata({
          title: patch.metaTitle,
          description: patch.metaDescription,
          path: '/custom-pvc-patches',
          image: patch.ogImage,
          imageAlt: 'Custom PVC rubber patches with logos',
      })
    : {};

export default function Page() {
    if (!patch) notFound();
    return <PatchLanding patch={patch} />;
}
