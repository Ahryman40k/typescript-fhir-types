
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           country: RTTI_CodeableConcept,
status: RTTI_CodeableConcept,
dateRange: RTTI_Period
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
jurisdiction: RTTI_CodeableConcept,
restoreDate: t.string,
_restoreDate: RTTI_Element
        });
        

        export var RTTI_MarketingStatus:any = t.intersection([mandatory, partial]);
        

export type IMarketingStatus = t.TypeOf<typeof RTTI_MarketingStatus>;
        
        