
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';

export enum Composition_AttesterModeKind {
                personal = 'personal',
professional = 'professional',
legal = 'legal',
official = 'official'
            }
const Composition_AttesterModeKindKeys = t.keyof({
                [Composition_AttesterModeKind.personal]: null,
[Composition_AttesterModeKind.professional]: null,
[Composition_AttesterModeKind.legal]: null,
[Composition_AttesterModeKind.official]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
mode: Composition_AttesterModeKindKeys,
_mode: RTTI_Element,
time: t.string,
_time: RTTI_Element,
party: RTTI_Reference
        });
        

        export var RTTI_Composition_Attester:any = t.intersection([mandatory, partial]);
        

export type IComposition_Attester = t.TypeOf<typeof RTTI_Composition_Attester>;
        
        