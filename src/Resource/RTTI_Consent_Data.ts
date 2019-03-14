
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';

export enum Consent_DataMeaningKind {
                instance = 'instance',
related = 'related',
dependents = 'dependents',
authoredby = 'authoredby'
            }
const Consent_DataMeaningKindKeys = t.keyof({
                [Consent_DataMeaningKind.instance]: null,
[Consent_DataMeaningKind.related]: null,
[Consent_DataMeaningKind.dependents]: null,
[Consent_DataMeaningKind.authoredby]: null
            });


        const mandatory = t.type({
           reference: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
meaning: Consent_DataMeaningKindKeys,
_meaning: RTTI_Element
        });
        

        export var RTTI_Consent_Data:any = t.intersection([mandatory, partial]);
        

export type IConsent_Data = t.TypeOf<typeof RTTI_Consent_Data>;
        
        