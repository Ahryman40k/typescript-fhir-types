
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Provenance_Agent} from './RTTI_Provenance_Agent';

export enum Provenance_EntityRoleKind {
                derivation = 'derivation',
revision = 'revision',
quotation = 'quotation',
source = 'source',
removal = 'removal'
            }
const Provenance_EntityRoleKindKeys = t.keyof({
                [Provenance_EntityRoleKind.derivation]: null,
[Provenance_EntityRoleKind.revision]: null,
[Provenance_EntityRoleKind.quotation]: null,
[Provenance_EntityRoleKind.source]: null,
[Provenance_EntityRoleKind.removal]: null
            });


        const mandatory = t.type({
           what: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
role: Provenance_EntityRoleKindKeys,
_role: RTTI_Element,
agent: t.array(RTTI_Provenance_Agent)
        });
        

        export var RTTI_Provenance_Entity:any = t.intersection([mandatory, partial]);
        

export type IProvenance_Entity = t.TypeOf<typeof RTTI_Provenance_Entity>;
        
        