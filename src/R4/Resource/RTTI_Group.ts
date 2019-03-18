
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Group_Characteristic, IGroup_Characteristic} from './RTTI_Group_Characteristic';
import {RTTI_Group_Member, IGroup_Member} from './RTTI_Group_Member';

export enum GroupTypeKind {
                person = 'person',
animal = 'animal',
practitioner = 'practitioner',
device = 'device',
medication = 'medication',
substance = 'substance'
            }
const GroupTypeKindKeys = t.keyof({
                [GroupTypeKind.person]: null,
[GroupTypeKind.animal]: null,
[GroupTypeKind.practitioner]: null,
[GroupTypeKind.device]: null,
[GroupTypeKind.medication]: null,
[GroupTypeKind.substance]: null
            });


            export interface IGroup {
                
                    /**
                     * This is a Group resource
                     */
                    resourceType: 'Group';
                    
                
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
                     * A unique business identifier for this group.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * Indicates whether the record for the group is available for use or is merely being retained for historical purposes.
                     */
                    active? : boolean;
                    

                    /**
                     * Extensions for active
                     */
                    _active? : IElement;
                    

                    /**
                     * Identifies the broad classification of the kind of resources the group includes.
                     */
                    type? : GroupTypeKind;
                    

                    /**
                     * Extensions for type
                     */
                    _type? : IElement;
                    

                    /**
                     * If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.
                     */
                    actual? : boolean;
                    

                    /**
                     * Extensions for actual
                     */
                    _actual? : IElement;
                    

                    /**
                     * Provides a specific type of resource the group includes; e.g. "cow", "syringe", etc.
                     */
                    code? : ICodeableConcept;
                    

                    /**
                     * A label assigned to the group for human identification and communication.
                     */
                    name? : string;
                    

                    /**
                     * Extensions for name
                     */
                    _name? : IElement;
                    

                    /**
                     * A count of the number of resource instances that are part of the group.
                     */
                    quantity? : number;
                    

                    /**
                     * Extensions for quantity
                     */
                    _quantity? : IElement;
                    

                    /**
                     * Identifies traits whose presence r absence is shared by members of the group.
                     */
                    characteristic? : IGroup_Characteristic[];
                    

                    /**
                     * Identifies the resource instances that are members of the group.
                     */
                    member? : IGroup_Member[];
                    
            }
        


        export const RTTI_Group: t.Type<IGroup> = t.recursion( 'IGroup', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('Group')
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
active: t.boolean,
_active: RTTI_Element,
type: GroupTypeKindKeys,
_type: RTTI_Element,
actual: t.boolean,
_actual: RTTI_Element,
code: RTTI_CodeableConcept,
name: t.string,
_name: RTTI_Element,
quantity: t.number,
_quantity: RTTI_Element,
characteristic: t.array(RTTI_Group_Characteristic),
member: t.array(RTTI_Group_Member)
        })
        
            ])
        );
        

        