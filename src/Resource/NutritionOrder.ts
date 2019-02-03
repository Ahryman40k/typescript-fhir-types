
        import { Annotation } from '../Resource/Annotation';
import { Canonical } from '../Scalar/Canonical';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { NutritionOrder_EnteralFormula } from '../Resource/NutritionOrder_EnteralFormula';
import { NutritionOrder_OralDiet } from '../Resource/NutritionOrder_OralDiet';
import { NutritionOrder_Supplement } from '../Resource/NutritionOrder_Supplement';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. 
         */
        export class NutritionOrder  {

            constructor() {
                this.Patient = new Reference();
            }

            
                /**
                 * This is a NutritionOrder resource
                 */
                ResourceType: string = 'NutritionOrder;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                Id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                Meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                ImplicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                Language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                Text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                Contained? : Array<ResourceList>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Identifiers assigned to this order by the order sender or by the order receiver.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
                 */
                InstantiatesCanonical? : Array<Canonical>;
                

                /**
                 * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
                 */
                InstantiatesUri? : Array<Uri>;
                

                /**
                 * Extensions for instantiatesUri
                 */
                _instantiatesUri? : Array<Element>;
                

                /**
                 * The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
                 */
                Instantiates? : Array<Uri>;
                

                /**
                 * Extensions for instantiates
                 */
                _instantiates? : Array<Element>;
                

                /**
                 * The workflow status of the nutrition order/request.
                 */
                Status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Indicates the level of authority/intentionality associated with the NutrionOrder and where the request fits into the workflow chain.
                 */
                Intent? : Code;
                

                /**
                 * Extensions for intent
                 */
                _intent? : Element;
                

                /**
                 * The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
                 */
                Patient : Reference;
                

                /**
                 * An encounter that provides additional information about the healthcare context in which this request is made.
                 */
                Context? : Reference;
                

                /**
                 * The date and time that this nutrition order was requested.
                 */
                DateTime? : DateTime;
                

                /**
                 * Extensions for dateTime
                 */
                _dateTime? : Element;
                

                /**
                 * The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
                 */
                Orderer? : Reference;
                

                /**
                 * A link to a record of allergies or intolerances  which should be included in the nutrition order.
                 */
                AllergyIntolerance? : Array<Reference>;
                

                /**
                 * This modifier is used to convey order-specific modifiers about the type of food that should be given. These can be derived from patient allergies, intolerances, or preferences such as Halal, Vegan or Kosher. This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
                 */
                FoodPreferenceModifier? : Array<CodeableConcept>;
                

                /**
                 * This modifier is used to convey Order-specific modifier about the type of oral food or oral fluids that should not be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced AllergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patient’s diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
                 */
                ExcludeFoodModifier? : Array<CodeableConcept>;
                

                /**
                 * Diet given orally in contrast to enteral (tube) feeding.
                 */
                OralDiet? : NutritionOrder_OralDiet;
                

                /**
                 * Oral nutritional products given in order to add further nutritional value to the patient's diet.
                 */
                Supplement? : Array<NutritionOrder_Supplement>;
                

                /**
                 * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
                 */
                EnteralFormula? : NutritionOrder_EnteralFormula;
                

                /**
                 * Comments made about the {{title}} by the requester, performer, subject or other participants.
                 */
                Note? : Array<Annotation>;
                
        }
        