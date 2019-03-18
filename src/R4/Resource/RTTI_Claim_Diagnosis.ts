
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';




            export interface IClaim_Diagnosis {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * Sequence of diagnosis which serves to provide a link.
                     */
                    sequence? : number;
                    

                    /**
                     * Extensions for sequence
                     */
                    _sequence? : IElement;
                    

                    /**
                     * The diagnosis.
                     */
                    diagnosisCodeableConcept? : ICodeableConcept;
                    

                    /**
                     * The diagnosis.
                     */
                    diagnosisReference? : IReference;
                    

                    /**
                     * The type of the Diagnosis, for example: admitting, primary, secondary, discharge.
                     */
                    type? : ICodeableConcept[];
                    

                    /**
                     * Indication of whether the diagnosis was present on admission to a facility.
                     */
                    onAdmission? : ICodeableConcept;
                    

                    /**
                     * The package billing code, for example DRG, based on the assigned grouping code system.
                     */
                    packageCode? : ICodeableConcept;
                    
            }
        


        export const RTTI_Claim_Diagnosis: t.Type<IClaim_Diagnosis> = t.recursion( 'IClaim_Diagnosis', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
sequence: t.number,
_sequence: RTTI_Element,
diagnosisCodeableConcept: RTTI_CodeableConcept,
diagnosisReference: RTTI_Reference,
type: t.array(RTTI_CodeableConcept),
onAdmission: RTTI_CodeableConcept,
packageCode: RTTI_CodeableConcept
        })
        
        );
        

        