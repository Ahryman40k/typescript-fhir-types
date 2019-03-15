
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_Reference, IReference} from './RTTI_Reference';

export enum ResearchSubjectStatusKind {
                candidate = 'candidate',
eligible = 'eligible',
followUp = 'followUp',
ineligible = 'ineligible',
notRegistered = 'notRegistered',
offStudy = 'offStudy',
onStudy = 'onStudy',
onStudyIntervention = 'onStudyIntervention',
onStudyObservation = 'onStudyObservation',
pendingOnStudy = 'pendingOnStudy',
potentialCandidate = 'potentialCandidate',
screening = 'screening',
withdrawn = 'withdrawn'
            }
const ResearchSubjectStatusKindKeys = t.keyof({
                [ResearchSubjectStatusKind.candidate]: null,
[ResearchSubjectStatusKind.eligible]: null,
[ResearchSubjectStatusKind.followUp]: null,
[ResearchSubjectStatusKind.ineligible]: null,
[ResearchSubjectStatusKind.notRegistered]: null,
[ResearchSubjectStatusKind.offStudy]: null,
[ResearchSubjectStatusKind.onStudy]: null,
[ResearchSubjectStatusKind.onStudyIntervention]: null,
[ResearchSubjectStatusKind.onStudyObservation]: null,
[ResearchSubjectStatusKind.pendingOnStudy]: null,
[ResearchSubjectStatusKind.potentialCandidate]: null,
[ResearchSubjectStatusKind.screening]: null,
[ResearchSubjectStatusKind.withdrawn]: null
            });


            export interface IResearchSubject {
                
                    /**
                     * This is a ResearchSubject resource
                     */
                    resourceType: 'ResearchSubject';
                    

                    /**
                     * Reference to the study the subject is participating in.
                     */
                    study : IReference;
                    

                    /**
                     * The record of the person or animal who is involved in the study.
                     */
                    individual : IReference;
                    
                
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
                     * Identifiers assigned to this research subject for a study.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * The current state of the subject.
                     */
                    status? : ResearchSubjectStatusKind;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * The dates the subject began and ended their participation in the study.
                     */
                    period? : IPeriod;
                    

                    /**
                     * The name of the arm in the study the subject is expected to follow as part of this study.
                     */
                    assignedArm? : string;
                    

                    /**
                     * Extensions for assignedArm
                     */
                    _assignedArm? : IElement;
                    

                    /**
                     * The name of the arm in the study the subject actually followed as part of this study.
                     */
                    actualArm? : string;
                    

                    /**
                     * Extensions for actualArm
                     */
                    _actualArm? : IElement;
                    

                    /**
                     * A record of the patient's informed agreement to participate in the study.
                     */
                    consent? : IReference;
                    
            }
        


        export const RTTI_ResearchSubject: t.Type<IResearchSubject> = t.recursion( 'IResearchSubject', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('ResearchSubject'),
study: RTTI_Reference,
individual: RTTI_Reference
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
status: ResearchSubjectStatusKindKeys,
_status: RTTI_Element,
period: RTTI_Period,
assignedArm: t.string,
_assignedArm: RTTI_Element,
actualArm: t.string,
_actualArm: RTTI_Element,
consent: RTTI_Reference
        })
        
            ])
        );
        

        