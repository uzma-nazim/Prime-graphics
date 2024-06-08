import { Contact, Packages } from '@/components/common';
import { EmbroideryPatch, EmbroideryPatches, LeatherPatch, LeatherPatches } from '@/components/embroideryPatch';
import React from 'react';

function Embroidery() {
    return (
        <div>
            <EmbroideryPatch />
            <EmbroideryPatches />
            <LeatherPatch />
            <LeatherPatches />
            <div className='mt-16'>
                <Packages />
            </div>
            <Contact />
        </div>
    );
}

export default Embroidery;