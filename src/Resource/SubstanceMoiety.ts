
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Identifier } from '../Resource/Identifier';
import { SubstanceAmount } from '../Resource/SubstanceAmount';

        

        /**
         * Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID. 
         */
        export class SubstanceMoiety  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * The role of the moiety should be specified if there is a specific role the moiety is playing.
                 */
                role? : CodeableConcept;
                

                /**
                 * The unique identifier assigned to the substance representing the moiety based on the ISO 11238 substance controlled vocabulary.
                 */
                identifier? : Identifier;
                

                /**
                 * The name of the moiety shall be provided.
                 */
                name? : string;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * Stereochemistry shall be captured as described in 4.7.1.
                 */
                stereochemistry? : CodeableConcept;
                

                /**
                 * Optical activity shall be captured as described in 4.7.2.
                 */
                opticalActivity? : CodeableConcept;
                

                /**
                 * Molecular formula shall be captured as described in 4.7.3.
                 */
                molecularFormula? : string;
                

                /**
                 * Extensions for molecularFormula
                 */
                _molecularFormula? : Element;
                

                /**
                 * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.
                 */
                amount? : SubstanceAmount;
                
        }
        