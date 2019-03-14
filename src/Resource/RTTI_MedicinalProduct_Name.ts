
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_MedicinalProduct_NamePart} from './RTTI_MedicinalProduct_NamePart';
import {RTTI_MedicinalProduct_CountryLanguage} from './RTTI_MedicinalProduct_CountryLanguage';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
productName: t.string,
_productName: RTTI_Element,
namePart: t.array(RTTI_MedicinalProduct_NamePart),
countryLanguage: t.array(RTTI_MedicinalProduct_CountryLanguage)
        });
        

        export var RTTI_MedicinalProduct_Name:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProduct_Name = t.TypeOf<typeof RTTI_MedicinalProduct_Name>;
        
        