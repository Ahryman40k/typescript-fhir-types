
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';
import {RTTI_CarePlan_Detail, ICarePlan_Detail} from './RTTI_CarePlan_Detail';




            export interface ICarePlan_Activity {
                
                
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
                     * Identifies the outcome at the point when the status of the activity is assessed.  For example, the outcome of an education activity could be patient understands (or not).
                     */
                    outcomeCodeableConcept? : ICodeableConcept[];
                    

                    /**
                     * Details of the outcome or action resulting from the activity.  The reference to an "event" resource, such as Procedure or Encounter or Observation, is the result/outcome of the activity itself.  The activity can be conveyed using CarePlan.activity.detail OR using the CarePlan.activity.reference (a reference to a “request” resource).
                     */
                    outcomeReference? : IReference[];
                    

                    /**
                     * Notes about the adherence/status/progress of the activity.
                     */
                    progress? : IAnnotation[];
                    

                    /**
                     * The details of the proposed activity represented in a specific resource.
                     */
                    reference? : IReference;
                    

                    /**
                     * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
                     */
                    detail? : ICarePlan_Detail;
                    
            }
        


        export const RTTI_CarePlan_Activity: t.Type<ICarePlan_Activity> = t.recursion( 'ICarePlan_Activity', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
outcomeCodeableConcept: t.array(RTTI_CodeableConcept),
outcomeReference: t.array(RTTI_Reference),
progress: t.array(RTTI_Annotation),
reference: RTTI_Reference,
detail: RTTI_CarePlan_Detail
        })
        
        );
        

        