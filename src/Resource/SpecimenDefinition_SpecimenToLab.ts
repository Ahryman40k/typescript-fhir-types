
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Duration } from '../Resource/Duration';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Quantity } from '../Resource/Quantity';
import { SpecimenDefinition_ContainerAdditive } from '../Resource/SpecimenDefinition_ContainerAdditive';
import { SpecimenDefinition_Handling } from '../Resource/SpecimenDefinition_Handling';

        export enum SpecimenDefinitionSpecimenToLabPreferenceKind {
                preferred,
alternate
            }

        /**
         * A kind of specimen with associated set of requirements. 
         */
        export class SpecimenDefinition_SpecimenToLab  {

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
                 * Primary of secondary specimen.
                 */
                isDerived? : boolean;
                

                /**
                 * Extensions for isDerived
                 */
                _isDerived? : Element;
                

                /**
                 * The kind of specimen conditioned for testing expected by lab.
                 */
                type? : CodeableConcept;
                

                /**
                 * The preference for this type of conditioned specimen.
                 */
                preference? : SpecimenDefinitionSpecimenToLabPreferenceKind;
                

                /**
                 * Extensions for preference
                 */
                _preference? : Element;
                

                /**
                 * The type of material of the container.
                 */
                containerMaterial? : CodeableConcept;
                

                /**
                 * The type of container used to contain this kind of specimen.
                 */
                containerType? : CodeableConcept;
                

                /**
                 * Color of container cap.
                 */
                containerCap? : CodeableConcept;
                

                /**
                 * The textual description of the kind of container.
                 */
                containerDescription? : string;
                

                /**
                 * Extensions for containerDescription
                 */
                _containerDescription? : Element;
                

                /**
                 * The capacity (volume or other measure) of this kind of container.
                 */
                containerCapacity? : Quantity;
                

                /**
                 * The minimum volume to be conditioned in the container.
                 */
                containerMinimumVolume? : Quantity;
                

                /**
                 * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
                 */
                containerAdditive? : SpecimenDefinition_ContainerAdditive[];
                

                /**
                 * Special processing that should be applied to the container for this kind of specimen.
                 */
                containerPreparation? : string;
                

                /**
                 * Extensions for containerPreparation
                 */
                _containerPreparation? : Element;
                

                /**
                 * Requirements for delivery and special handling of this kind of conditioned specimen.
                 */
                requirement? : string;
                

                /**
                 * Extensions for requirement
                 */
                _requirement? : Element;
                

                /**
                 * The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing.
                 */
                retentionTime? : Duration;
                

                /**
                 * Criterion for rejection of the specimen in its container by the laboratory.
                 */
                rejectionCriterion? : CodeableConcept[];
                

                /**
                 * Set of instructions for conservation/transport of the specimen at a defined temperature interval, prior the testing process.
                 */
                handling? : SpecimenDefinition_Handling[];
                
        }
        