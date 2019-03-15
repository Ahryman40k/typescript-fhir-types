
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';




            export interface ICoding {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * The identification of the code system that defines the meaning of the symbol in the code.
                     */
                    system? : string;
                    

                    /**
                     * Extensions for system
                     */
                    _system? : IElement;
                    

                    /**
                     * The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.
                     */
                    version? : string;
                    

                    /**
                     * Extensions for version
                     */
                    _version? : IElement;
                    

                    /**
                     * A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).
                     */
                    code? : string;
                    

                    /**
                     * Extensions for code
                     */
                    _code? : IElement;
                    

                    /**
                     * A representation of the meaning of the code in the system, following the rules of the system.
                     */
                    display? : string;
                    

                    /**
                     * Extensions for display
                     */
                    _display? : IElement;
                    

                    /**
                     * Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).
                     */
                    userSelected? : boolean;
                    

                    /**
                     * Extensions for userSelected
                     */
                    _userSelected? : IElement;
                    
            }
        


        export const RTTI_Coding: t.Type<ICoding> = t.recursion( 'ICoding', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
system: t.string,
_system: RTTI_Element,
version: t.string,
_version: RTTI_Element,
code: t.string,
_code: RTTI_Element,
display: t.string,
_display: RTTI_Element,
userSelected: t.boolean,
_userSelected: RTTI_Element
        })
        
        );
        

        