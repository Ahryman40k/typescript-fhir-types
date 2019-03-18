
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';


import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_Age, IAge} from './RTTI_Age';
import {RTTI_Range, IRange} from './RTTI_Range';
import {RTTI_Procedure_Performer, IProcedure_Performer} from './RTTI_Procedure_Performer';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';
import {RTTI_Procedure_FocalDevice, IProcedure_FocalDevice} from './RTTI_Procedure_FocalDevice';




            export interface IProcedure {
                
                    /**
                     * This is a Procedure resource
                     */
                    resourceType: 'Procedure';
                    

                    /**
                     * The person, animal or group on which the procedure was performed.
                     */
                    subject : IReference;
                    
                
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
                    contained? : IResourceList[];
                    

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
                     * Business identifiers assigned to this procedure by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Procedure.
                     */
                    instantiatesCanonical? : string[];
                    

                    /**
                     * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Procedure.
                     */
                    instantiatesUri? : string[];
                    

                    /**
                     * Extensions for instantiatesUri
                     */
                    _instantiatesUri? : IElement[];
                    

                    /**
                     * A reference to a resource that contains details of the request for this procedure.
                     */
                    basedOn? : IReference[];
                    

                    /**
                     * A larger event of which this particular procedure is a component or step.
                     */
                    partOf? : IReference[];
                    

                    /**
                     * A code specifying the state of the procedure. Generally this will be in-progress or completed state.
                     */
                    status? : string;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * Captures the reason for the current state of the procedure.
                     */
                    statusReason? : ICodeableConcept;
                    

                    /**
                     * A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
                     */
                    category? : ICodeableConcept;
                    

                    /**
                     * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
                     */
                    code? : ICodeableConcept;
                    

                    /**
                     * The encounter during which the procedure was performed.
                     */
                    context? : IReference;
                    

                    /**
                     * Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
                     */
                    performedDateTime? : string;
                    

                    /**
                     * Extensions for performedDateTime
                     */
                    _performedDateTime? : IElement;
                    

                    /**
                     * Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
                     */
                    performedPeriod? : IPeriod;
                    

                    /**
                     * Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
                     */
                    performedString? : string;
                    

                    /**
                     * Extensions for performedString
                     */
                    _performedString? : IElement;
                    

                    /**
                     * Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
                     */
                    performedAge? : IAge;
                    

                    /**
                     * Estimated or actual date, date-time, period, or age when the procedure was performed.  Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
                     */
                    performedRange? : IRange;
                    

                    /**
                     * Individual who recorded the record and takes responsibility for its content.
                     */
                    recorder? : IReference;
                    

                    /**
                     * Individual who is making the procedure statement.
                     */
                    asserter? : IReference;
                    

                    /**
                     * Limited to 'real' people rather than equipment.
                     */
                    performer? : IProcedure_Performer[];
                    

                    /**
                     * The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
                     */
                    location? : IReference;
                    

                    /**
                     * The coded reason why the procedure was performed. This may be coded entity of some type, or may simply be present as text.
                     */
                    reasonCode? : ICodeableConcept[];
                    

                    /**
                     * The justification of why the procedure was performed.
                     */
                    reasonReference? : IReference[];
                    

                    /**
                     * Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
                     */
                    bodySite? : ICodeableConcept[];
                    

                    /**
                     * The outcome of the procedure - did it resolve reasons for the procedure being performed?
                     */
                    outcome? : ICodeableConcept;
                    

                    /**
                     * This could be a histology result, pathology report, surgical report, etc.
                     */
                    report? : IReference[];
                    

                    /**
                     * Any complications that occurred during the procedure, or in the immediate post-performance period. These are generally tracked separately from the notes, which will typically describe the procedure itself rather than any 'post procedure' issues.
                     */
                    complication? : ICodeableConcept[];
                    

                    /**
                     * Any complications that occurred during the procedure, or in the immediate post-performance period.
                     */
                    complicationDetail? : IReference[];
                    

                    /**
                     * If the procedure required specific follow up - e.g. removal of sutures. The followup may be represented as a simple note, or could potentially be more complex in which case the CarePlan resource can be used.
                     */
                    followUp? : ICodeableConcept[];
                    

                    /**
                     * Any other notes and comments about the procedure.
                     */
                    note? : IAnnotation[];
                    

                    /**
                     * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
                     */
                    focalDevice? : IProcedure_FocalDevice[];
                    

                    /**
                     * Identifies medications, devices and any other substance used as part of the procedure.
                     */
                    usedReference? : IReference[];
                    

                    /**
                     * Identifies coded items that were used as part of the procedure.
                     */
                    usedCode? : ICodeableConcept[];
                    
            }
        


        export const RTTI_Procedure: t.Type<IProcedure> = t.recursion( 'IProcedure', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('Procedure'),
subject: RTTI_Reference
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
contained: t.array(RTTI_ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
instantiatesCanonical: t.array(t.string),
instantiatesUri: t.array(t.string),
_instantiatesUri: t.array(RTTI_Element),
basedOn: t.array(RTTI_Reference),
partOf: t.array(RTTI_Reference),
status: t.string,
_status: RTTI_Element,
statusReason: RTTI_CodeableConcept,
category: RTTI_CodeableConcept,
code: RTTI_CodeableConcept,
context: RTTI_Reference,
performedDateTime: t.string,
_performedDateTime: RTTI_Element,
performedPeriod: RTTI_Period,
performedString: t.string,
_performedString: RTTI_Element,
performedAge: RTTI_Age,
performedRange: RTTI_Range,
recorder: RTTI_Reference,
asserter: RTTI_Reference,
performer: t.array(RTTI_Procedure_Performer),
location: RTTI_Reference,
reasonCode: t.array(RTTI_CodeableConcept),
reasonReference: t.array(RTTI_Reference),
bodySite: t.array(RTTI_CodeableConcept),
outcome: RTTI_CodeableConcept,
report: t.array(RTTI_Reference),
complication: t.array(RTTI_CodeableConcept),
complicationDetail: t.array(RTTI_Reference),
followUp: t.array(RTTI_CodeableConcept),
note: t.array(RTTI_Annotation),
focalDevice: t.array(RTTI_Procedure_FocalDevice),
usedReference: t.array(RTTI_Reference),
usedCode: t.array(RTTI_CodeableConcept)
        })
        
            ])
        );
        

        