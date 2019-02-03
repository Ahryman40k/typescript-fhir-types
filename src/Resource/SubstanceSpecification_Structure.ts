
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Reference } from '../Resource/Reference';
import { SubstanceSpecification_Isotope } from '../Resource/SubstanceSpecification_Isotope';
import { SubstanceSpecification_MolecularWeight } from '../Resource/SubstanceSpecification_MolecularWeight';
import { SubstanceSpecification_StructuralRepresentation } from '../Resource/SubstanceSpecification_StructuralRepresentation';

        

        /**
         * The detailed description of a substance, typically at a level beyond what is used for prescribing. 
         */
        export class SubstanceSpecification_Structure  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                Id? : String;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Stereochemistry type.
                 */
                Stereochemistry? : CodeableConcept;
                

                /**
                 * Optical activity type.
                 */
                OpticalActivity? : CodeableConcept;
                

                /**
                 * Molecular formula.
                 */
                MolecularFormula? : String;
                

                /**
                 * Extensions for molecularFormula
                 */
                _molecularFormula? : Element;
                

                /**
                 * Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical. and each moiety separated by a dot.
                 */
                MolecularFormulaByMoiety? : String;
                

                /**
                 * Extensions for molecularFormulaByMoiety
                 */
                _molecularFormulaByMoiety? : Element;
                

                /**
                 * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
                 */
                Isotope? : Array<SubstanceSpecification_Isotope>;
                

                /**
                 * The molecular weight or weight range (for proteins, polymers or nucleic acids).
                 */
                MolecularWeight? : SubstanceSpecification_MolecularWeight;
                

                /**
                 * Supporting literature.
                 */
                ReferenceSource? : Array<Reference>;
                

                /**
                 * Molectular structural representation.
                 */
                StructuralRepresentation? : Array<SubstanceSpecification_StructuralRepresentation>;
                
        }
        