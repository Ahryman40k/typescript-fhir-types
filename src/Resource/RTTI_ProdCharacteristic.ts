
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Element} from './RTTI_Element';

import {RTTI_Attachment} from './RTTI_Attachment';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
height: RTTI_Quantity,
width: RTTI_Quantity,
depth: RTTI_Quantity,
weight: RTTI_Quantity,
nominalVolume: RTTI_Quantity,
externalDiameter: RTTI_Quantity,
shape: t.string,
_shape: RTTI_Element,
color: t.array(t.string),
_color: t.array(RTTI_Element),
imprint: t.array(t.string),
_imprint: t.array(RTTI_Element),
image: t.array(RTTI_Attachment),
scoring: RTTI_CodeableConcept
        });
        

        export var RTTI_ProdCharacteristic:any = t.intersection([mandatory, partial]);
        

export type IProdCharacteristic = t.TypeOf<typeof RTTI_ProdCharacteristic>;
        
        