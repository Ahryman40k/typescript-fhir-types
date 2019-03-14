
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

import {RTTI_Period} from './RTTI_Period';

export enum HumanNameUseKind {
                usual = 'usual',
official = 'official',
temp = 'temp',
nickname = 'nickname',
anonymous = 'anonymous',
old = 'old',
maiden = 'maiden'
            }
const HumanNameUseKindKeys = t.keyof({
                [HumanNameUseKind.usual]: null,
[HumanNameUseKind.official]: null,
[HumanNameUseKind.temp]: null,
[HumanNameUseKind.nickname]: null,
[HumanNameUseKind.anonymous]: null,
[HumanNameUseKind.old]: null,
[HumanNameUseKind.maiden]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
use: HumanNameUseKindKeys,
_use: RTTI_Element,
text: t.string,
_text: RTTI_Element,
family: t.string,
_family: RTTI_Element,
given: t.array(t.string),
_given: t.array(RTTI_Element),
prefix: t.array(t.string),
_prefix: t.array(RTTI_Element),
suffix: t.array(t.string),
_suffix: t.array(RTTI_Element),
period: RTTI_Period
        });
        

        export var RTTI_HumanName:any = t.intersection([mandatory, partial]);
        

export type IHumanName = t.TypeOf<typeof RTTI_HumanName>;
        
        