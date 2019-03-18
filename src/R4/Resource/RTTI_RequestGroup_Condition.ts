
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';




            export interface IRequestGroup_Condition {
                
                
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
                     * The kind of condition.
                     */
                    kind? : string;
                    

                    /**
                     * Extensions for kind
                     */
                    _kind? : IElement;
                    

                    /**
                     * A brief, natural language description of the condition that effectively communicates the intended semantics.
                     */
                    description? : string;
                    

                    /**
                     * Extensions for description
                     */
                    _description? : IElement;
                    

                    /**
                     * The media type of the language for the expression.
                     */
                    language? : string;
                    

                    /**
                     * Extensions for language
                     */
                    _language? : IElement;
                    

                    /**
                     * An expression that returns true or false, indicating whether or not the condition is satisfied.
                     */
                    expression? : string;
                    

                    /**
                     * Extensions for expression
                     */
                    _expression? : IElement;
                    
            }
        


        export const RTTI_RequestGroup_Condition: t.Type<IRequestGroup_Condition> = t.recursion( 'IRequestGroup_Condition', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
kind: t.string,
_kind: RTTI_Element,
description: t.string,
_description: RTTI_Element,
language: t.string,
_language: RTTI_Element,
expression: t.string,
_expression: RTTI_Element
        })
        
        );
        

        