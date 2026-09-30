import { Contact, Packages } from '@/components/common';
import { EmbroideryPatch, EmbroideryPatches, LeatherPatch, LeatherPatches, PVCPatch, PVCPatches } from '@/components/embroideryPatch';
import React from 'react';

function Embroidery() {
    return (
        <div>
            <EmbroideryPatch />
            <EmbroideryPatches />
            <LeatherPatch />
            <LeatherPatches />
            <PVCPatch />
            <PVCPatches />
            <div className='mt-16'>
                <Packages />
            </div>
            <Contact />
        </div>
    );
}

export default Embroidery;