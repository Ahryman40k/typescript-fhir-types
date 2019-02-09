
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
import { Period } from '../Resource/Period';
import { Quantity } from '../Resource/Quantity';
import { Range } from '../Resource/Range';
import { Ratio } from '../Resource/Ratio';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Timing } from '../Resource/Timing';
import { Uri } from '../Scalar/Uri';

        

        /**
         * A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. 
         */
        export class ServiceRequest  {

            constructor() {
                this.subject = new Reference();
            }

            
                /**
                 * This is a ServiceRequest resource
                 */
                resourceType: string = 'ServiceRequest;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                implicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                contained? : ResourceList[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * Identifiers assigned to this order instance by the orderer and/or the receiver and/or order fulfiller.
                 */
                identifier? : Identifier[];
                

                /**
                 * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this ServiceRequest.
                 */
                instantiatesCanonical? : Canonical[];
                

                /**
                 * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this ServiceRequest.
                 */
                instantiatesUri? : Uri[];
                

                /**
                 * Extensions for instantiatesUri
                 */
                _instantiatesUri? : Element[];
                

                /**
                 * Plan/proposal/order fulfilled by this request.
                 */
                basedOn? : Reference[];
                

                /**
                 * The request takes the place of the referenced completed or terminated request(s).
                 */
                replaces? : Reference[];
                

                /**
                 * A shared identifier common to all service requests that were authorized more or less simultaneously by a single author, representing the composite or group identifier.
                 */
                requisition? : Identifier;
                

                /**
                 * The status of the order.
                 */
                status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Whether the request is a proposal, plan, an original order or a reflex order.
                 */
                intent? : Code;
                

                /**
                 * Extensions for intent
                 */
                _intent? : Element;
                

                /**
                 * A code that classifies the service for searching, sorting and display purposes (e.g. "Surgical Procedure").
                 */
                category? : CodeableConcept[];
                

                /**
                 * Indicates how quickly the ServiceRequest should be addressed with respect to other requests.
                 */
                priority? : Code;
                

                /**
                 * Extensions for priority
                 */
                _priority? : Element;
                

                /**
                 * Set this to true if the record is saying that the service/procedure should NOT be performed.
                 */
                doNotPerform? : boolean;
                

                /**
                 * Extensions for doNotPerform
                 */
                _doNotPerform? : Element;
                

                /**
                 * A code that identifies a particular service (i.e., procedure, diagnostic investigation, or panel of investigations) that have been requested.
                 */
                code? : CodeableConcept;
                

                /**
                 * Additional details and instructions about the how the services are to be delivered.   For example, and order for a urinary catheter may have an order detail for an external or indwelling catheter, or an order for a bandage may require additional instructions specifying how the bandage should be applied.
                 */
                orderDetail? : CodeableConcept[];
                

                /**
                 * An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
                 */
                quantityQuantity? : Quantity;
                

                /**
                 * An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
                 */
                quantityRatio? : Ratio;
                

                /**
                 * An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).
                 */
                quantityRange? : Range;
                

                /**
                 * On whom or what the service is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).
                 */
                subject : Reference;
                

                /**
                 * An encounter or episode of care that provides additional information about the healthcare context in which this request is made.
                 */
                context? : Reference;
                

                /**
                 * The date/time at which the requested service should occur.
                 */
                occurrenceDateTime? : string;
                

                /**
                 * Extensions for occurrenceDateTime
                 */
                _occurrenceDateTime? : Element;
                

                /**
                 * The date/time at which the requested service should occur.
                 */
                occurrencePeriod? : Period;
                

                /**
                 * The date/time at which the requested service should occur.
                 */
                occurrenceTiming? : Timing;
                

                /**
                 * If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example "pain", "on flare-up", etc.
                 */
                asNeededBoolean? : boolean;
                

                /**
                 * Extensions for asNeededBoolean
                 */
                _asNeededBoolean? : Element;
                

                /**
                 * If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example "pain", "on flare-up", etc.
                 */
                asNeededCodeableConcept? : CodeableConcept;
                

                /**
                 * When the request transitioned to being actionable.
                 */
                authoredOn? : DateTime;
                

                /**
                 * Extensions for authoredOn
                 */
                _authoredOn? : Element;
                

                /**
                 * The individual who initiated the request and has responsibility for its activation.
                 */
                requester? : Reference;
                

                /**
                 * Desired type of performer for doing the requested service.
                 */
                performerType? : CodeableConcept;
                

                /**
                 * The desired performer for doing the requested service.  For example, the surgeon, dermatopathologist, endoscopist, etc.
                 */
                performer? : Reference[];
                

                /**
                 * The preferred location(s) where the procedure should actually happen in coded or free text form. E.g. at home or nursing day care center.
                 */
                locationCode? : CodeableConcept[];
                

                /**
                 * A reference to the the preferred location(s) where the procedure should actually happen. E.g. at home or nursing day care center.
                 */
                locationReference? : Reference[];
                

                /**
                 * An explanation or justification for why this service is being requested in coded or textual form.   This is often for billing purposes.  May relate to the resources referred to in supportingInformation.
                 */
                reasonCode? : CodeableConcept[];
                

                /**
                 * Indicates another resource that provides a justification for why this service is being requested.   May relate to the resources referred to in supportingInformation.
                 */
                reasonReference? : Reference[];
                

                /**
                 * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be needed for delivering the requested service.
                 */
                insurance? : Reference[];
                

                /**
                 * Additional clinical information about the patient or specimen that may influence the services or their interpretations.     This information includes diagnosis, clinical findings and other observations.  In laboratory ordering these are typically referred to as "ask at order entry questions (AOEs)".  This includes observations explicitly requested by the producer (filler) to provide context or supporting information needed to complete the order. For example,  reporting the amount of inspired oxygen for blood gas measurements.
                 */
                supportingInfo? : Reference[];
                

                /**
                 * One or more specimens that the laboratory procedure will use.
                 */
                specimen? : Reference[];
                

                /**
                 * Anatomic location where the procedure should be performed. This is the target site.
                 */
                bodySite? : CodeableConcept[];
                

                /**
                 * Any other notes and comments made about the service request. For example, internal billing notes.
                 */
                note? : Annotation[];
                

                /**
                 * Instructions in terms that are understood by the patient or consumer.
                 */
                patientInstruction? : string;
                

                /**
                 * Extensions for patientInstruction
                 */
                _patientInstruction? : Element;
                

                /**
                 * Key events in the history of the request.
                 */
                relevantHistory? : Reference[];
                
        }
        