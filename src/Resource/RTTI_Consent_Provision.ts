
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Consent_Actor} from './RTTI_Consent_Actor';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Consent_Data} from './RTTI_Consent_Data';

export enum Consent_ProvisionTypeKind {
                deny = 'deny',
permit = 'permit'
            }
const Consent_ProvisionTypeKindKeys = t.keyof({
                [Consent_ProvisionTypeKind.deny]: null,
[Consent_ProvisionTypeKind.permit]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: Consent_ProvisionTypeKindKeys,
_type: RTTI_Element,
period: RTTI_Period,
actor: t.array(RTTI_Consent_Actor),
action: t.array(RTTI_CodeableConcept),
securityLabel: t.array(RTTI_Coding),
purpose: t.array(RTTI_Coding),
class: t.array(RTTI_Coding),
code: t.array(RTTI_CodeableConcept),
dataPeriod: RTTI_Period,
data: t.array(RTTI_Consent_Data),
provision: t.array(RTTI_Consent_Provision)
        });
        

        export var RTTI_Consent_Provision:any = t.intersection([mandatory, partial]);
        

export type IConsent_Provision = t.TypeOf<typeof RTTI_Consent_Provision>;
        
        