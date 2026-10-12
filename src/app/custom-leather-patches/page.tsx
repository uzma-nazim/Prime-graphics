import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PatchLanding from '@/components/patches/PatchLanding';
import { patchTypes } from '@/lib/patches';
import { pageMetadata } from '@/lib/seo';

const patch = patchTypes.find((p) => p.slug === 'custom-leather-patches');

export const metadata: Metadata = patch
    ? pageMetadata({
          title: patch.metaTitle,
          description: patch.metaDescription,
          path: '/custom-leather-patches',
          image: patch.ogImage,
          imageAlt: 'Custom leather patch with engraved logo',
      })
    : {};

export default function Page() {
    if (!patch) notFound();
    return <PatchLanding patch={patch} />;
}
