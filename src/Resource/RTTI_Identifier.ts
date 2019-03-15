
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_Reference, IReference} from './RTTI_Reference';

export enum IdentifierUseKind {
                usual = 'usual',
official = 'official',
temp = 'temp',
secondary = 'secondary',
old = 'old'
            }
const IdentifierUseKindKeys = t.keyof({
                [IdentifierUseKind.usual]: null,
[IdentifierUseKind.official]: null,
[IdentifierUseKind.temp]: null,
[IdentifierUseKind.secondary]: null,
[IdentifierUseKind.old]: null
            });


            export interface IIdentifier {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * The purpose of this identifier.
                     */
                    use? : IdentifierUseKind;
                    

                    /**
                     * Extensions for use
                     */
                    _use? : IElement;
                    

                    /**
                     * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
                     */
                    type? : ICodeableConcept;
                    

                    /**
                     * Establishes the namespace for the value - that is, a URL that describes a set values that are unique.
                     */
                    system? : string;
                    

                    /**
                     * Extensions for system
                     */
                    _system? : IElement;
                    

                    /**
                     * The portion of the identifier typically relevant to the user and which is unique within the context of the system.
                     */
                    value? : string;
                    

                    /**
                     * Extensions for value
                     */
                    _value? : IElement;
                    

                    /**
                     * Time period during which identifier is/was valid for use.
                     */
                    period? : IPeriod;
                    

                    /**
                     * Organization that issued/manages the identifier.
                     */
                    assigner? : IReference;
                    
            }
        


        export const RTTI_Identifier: t.Type<IIdentifier> = t.recursion( 'IIdentifier', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
use: IdentifierUseKindKeys,
_use: RTTI_Element,
type: RTTI_CodeableConcept,
system: t.string,
_system: RTTI_Element,
value: t.string,
_value: RTTI_Element,
period: RTTI_Period,
assigner: RTTI_Reference
        })
        
        );
        

        