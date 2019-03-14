
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

import {RTTI_Period} from './RTTI_Period';

export enum AddressUseKind {
                home = 'home',
work = 'work',
temp = 'temp',
old = 'old',
billing = 'billing'
            }
export enum AddressTypeKind {
                postal = 'postal',
physical = 'physical',
both = 'both'
            }
const AddressUseKindKeys = t.keyof({
                [AddressUseKind.home]: null,
[AddressUseKind.work]: null,
[AddressUseKind.temp]: null,
[AddressUseKind.old]: null,
[AddressUseKind.billing]: null
            });
const AddressTypeKindKeys = t.keyof({
                [AddressTypeKind.postal]: null,
[AddressTypeKind.physical]: null,
[AddressTypeKind.both]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
use: AddressUseKindKeys,
_use: RTTI_Element,
type: AddressTypeKindKeys,
_type: RTTI_Element,
text: t.string,
_text: RTTI_Element,
line: t.array(t.string),
_line: t.array(RTTI_Element),
city: t.string,
_city: RTTI_Element,
district: t.string,
_district: RTTI_Element,
state: t.string,
_state: RTTI_Element,
postalCode: t.string,
_postalCode: RTTI_Element,
country: t.string,
_country: RTTI_Element,
period: RTTI_Period
        });
        

        export var RTTI_Address:any = t.intersection([mandatory, partial]);
        

export type IAddress = t.TypeOf<typeof RTTI_Address>;
        
        