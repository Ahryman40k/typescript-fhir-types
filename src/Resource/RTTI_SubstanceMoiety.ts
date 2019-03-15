
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_SubstanceAmount, ISubstanceAmount} from './RTTI_SubstanceAmount';




            export interface ISubstanceMoiety {
                
                
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
                     * The role of the moiety should be specified if there is a specific role the moiety is playing.
                     */
                    role? : ICodeableConcept;
                    

                    /**
                     * The unique identifier assigned to the substance representing the moiety based on the ISO 11238 substance controlled vocabulary.
                     */
                    identifier? : IIdentifier;
                    

                    /**
                     * The name of the moiety shall be provided.
                     */
                    name? : string;
                    

                    /**
                     * Extensions for name
                     */
                    _name? : IElement;
                    

                    /**
                     * Stereochemistry shall be captured as described in 4.7.1.
                     */
                    stereochemistry? : ICodeableConcept;
                    

                    /**
                     * Optical activity shall be captured as described in 4.7.2.
                     */
                    opticalActivity? : ICodeableConcept;
                    

                    /**
                     * Molecular formula shall be captured as described in 4.7.3.
                     */
                    molecularFormula? : string;
                    

                    /**
                     * Extensions for molecularFormula
                     */
                    _molecularFormula? : IElement;
                    

                    /**
                     * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
                     */
                    amount? : ISubstanceAmount;
                    
            }
        


        export const RTTI_SubstanceMoiety: t.Type<ISubstanceMoiety> = t.recursion( 'ISubstanceMoiety', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
role: RTTI_CodeableConcept,
identifier: RTTI_Identifier,
name: t.string,
_name: RTTI_Element,
stereochemistry: RTTI_CodeableConcept,
opticalActivity: RTTI_CodeableConcept,
molecularFormula: t.string,
_molecularFormula: RTTI_Element,
amount: RTTI_SubstanceAmount
        })
        
        );
        

        