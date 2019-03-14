
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_NutritionOrder_Administration} from './RTTI_NutritionOrder_Administration';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
baseFormulaType: RTTI_CodeableConcept,
baseFormulaProductName: t.string,
_baseFormulaProductName: RTTI_Element,
additiveType: RTTI_CodeableConcept,
additiveProductName: t.string,
_additiveProductName: RTTI_Element,
caloricDensity: RTTI_Quantity,
routeofAdministration: RTTI_CodeableConcept,
administration: t.array(RTTI_NutritionOrder_Administration),
maxVolumeToDeliver: RTTI_Quantity,
administrationInstruction: t.string,
_administrationInstruction: RTTI_Element
        });
        

        export var RTTI_NutritionOrder_EnteralFormula:any = t.intersection([mandatory, partial]);
        

export type INutritionOrder_EnteralFormula = t.TypeOf<typeof RTTI_NutritionOrder_EnteralFormula>;
        
        