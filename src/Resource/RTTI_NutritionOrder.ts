
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';


import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_NutritionOrder_OralDiet, INutritionOrder_OralDiet} from './RTTI_NutritionOrder_OralDiet';
import {RTTI_NutritionOrder_Supplement, INutritionOrder_Supplement} from './RTTI_NutritionOrder_Supplement';
import {RTTI_NutritionOrder_EnteralFormula, INutritionOrder_EnteralFormula} from './RTTI_NutritionOrder_EnteralFormula';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';




            export interface INutritionOrder {
                
                    /**
                     * This is a NutritionOrder resource
                     */
                    resourceType: 'NutritionOrder';
                    

                    /**
                     * The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
                     */
                    patient : IReference;
                    
                
                    /**
                     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                     */
                    id? : string;
                    

                    /**
                     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                     */
                    meta? : IMeta;
                    

                    /**
                     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                     */
                    implicitRules? : string;
                    

                    /**
                     * Extensions for implicitRules
                     */
                    _implicitRules? : IElement;
                    

                    /**
                     * The base language in which the resource is written.
                     */
                    language? : string;
                    

                    /**
                     * Extensions for language
                     */
                    _language? : IElement;
                    

                    /**
                     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                     */
                    text? : INarrative;
                    

                    /**
                     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                     */
                    // contained? : IResourceList[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * Identifiers assigned to this order by the order sender or by the order receiver.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
                     */
                    instantiatesCanonical? : string[];
                    

                    /**
                     * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
                     */
                    instantiatesUri? : string[];
                    

                    /**
                     * Extensions for instantiatesUri
                     */
                    _instantiatesUri? : IElement[];
                    

                    /**
                     * The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
                     */
                    instantiates? : string[];
                    

                    /**
                     * Extensions for instantiates
                     */
                    _instantiates? : IElement[];
                    

                    /**
                     * The workflow status of the nutrition order/request.
                     */
                    status? : string;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * Indicates the level of authority/intentionality associated with the NutrionOrder and where the request fits into the workflow chain.
                     */
                    intent? : string;
                    

                    /**
                     * Extensions for intent
                     */
                    _intent? : IElement;
                    

                    /**
                     * An encounter that provides additional information about the healthcare context in which this request is made.
                     */
                    context? : IReference;
                    

                    /**
                     * The date and time that this nutrition order was requested.
                     */
                    dateTime? : string;
                    

                    /**
                     * Extensions for dateTime
                     */
                    _dateTime? : IElement;
                    

                    /**
                     * The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
                     */
                    orderer? : IReference;
                    

                    /**
                     * A link to a record of allergies or intolerances  which should be included in the nutrition order.
                     */
                    allergyIntolerance? : IReference[];
                    

                    /**
                     * This modifier is used to convey order-specific modifiers about the type of food that should be given. These can be derived from patient allergies, intolerances, or preferences such as Halal, Vegan or Kosher. This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
                     */
                    foodPreferenceModifier? : ICodeableConcept[];
                    

                    /**
                     * This modifier is used to convey Order-specific modifier about the type of oral food or oral fluids that should not be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced AllergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patient’s diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
                     */
                    excludeFoodModifier? : ICodeableConcept[];
                    

                    /**
                     * Diet given orally in contrast to enteral (tube) feeding.
                     */
                    oralDiet? : INutritionOrder_OralDiet;
                    

                    /**
                     * Oral nutritional products given in order to add further nutritional value to the patient's diet.
                     */
                    supplement? : INutritionOrder_Supplement[];
                    

                    /**
                     * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
                     */
                    enteralFormula? : INutritionOrder_EnteralFormula;
                    

                    /**
                     * Comments made about the {{title}} by the requester, performer, subject or other participants.
                     */
                    note? : IAnnotation[];
                    
            }
        


        export const RTTI_NutritionOrder: t.Type<INutritionOrder> = t.recursion( 'INutritionOrder', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('NutritionOrder'),
patient: RTTI_Reference
        })
        ,
                
        t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
// contained: t.array(RTTI_ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
instantiatesCanonical: t.array(t.string),
instantiatesUri: t.array(t.string),
_instantiatesUri: t.array(RTTI_Element),
instantiates: t.array(t.string),
_instantiates: t.array(RTTI_Element),
status: t.string,
_status: RTTI_Element,
intent: t.string,
_intent: RTTI_Element,
context: RTTI_Reference,
dateTime: t.string,
_dateTime: RTTI_Element,
orderer: RTTI_Reference,
allergyIntolerance: t.array(RTTI_Reference),
foodPreferenceModifier: t.array(RTTI_CodeableConcept),
excludeFoodModifier: t.array(RTTI_CodeableConcept),
oralDiet: RTTI_NutritionOrder_OralDiet,
supplement: t.array(RTTI_NutritionOrder_Supplement),
enteralFormula: RTTI_NutritionOrder_EnteralFormula,
note: t.array(RTTI_Annotation)
        })
        
            ])
        );
        

        