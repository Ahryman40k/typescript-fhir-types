
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Reference, IReference} from './RTTI_Reference';

export enum EntryDefinition_RelatedEntryRelationtypeKind {
                hasInput = 'hasInput',
hasOutput = 'hasOutput',
uses = 'uses',
triggers = 'triggers',
isReplacedBy = 'isReplacedBy'
            }
const EntryDefinition_RelatedEntryRelationtypeKindKeys = t.keyof({
                [EntryDefinition_RelatedEntryRelationtypeKind.hasInput]: null,
[EntryDefinition_RelatedEntryRelationtypeKind.hasOutput]: null,
[EntryDefinition_RelatedEntryRelationtypeKind.uses]: null,
[EntryDefinition_RelatedEntryRelationtypeKind.triggers]: null,
[EntryDefinition_RelatedEntryRelationtypeKind.isReplacedBy]: null
            });


            export interface IEntryDefinition_RelatedEntry {
                
                    /**
                     * The reference to the related item.
                     */
                    item : IReference;
                    
                
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
                     * The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc.
                     */
                    relationtype? : EntryDefinition_RelatedEntryRelationtypeKind;
                    

                    /**
                     * Extensions for relationtype
                     */
                    _relationtype? : IElement;
                    
            }
        


        export const RTTI_EntryDefinition_RelatedEntry: t.Type<IEntryDefinition_RelatedEntry> = t.recursion( 'IEntryDefinition_RelatedEntry', () =>
            t.intersection([
                
        t.type({
           item: RTTI_Reference
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
relationtype: EntryDefinition_RelatedEntryRelationtypeKindKeys,
_relationtype: RTTI_Element
        })
        
            ])
        );
        

        