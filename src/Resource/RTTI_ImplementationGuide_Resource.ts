
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Element, IElement} from './RTTI_Element';




            export interface IImplementationGuide_Resource {
                
                    /**
                     * Where this resource is found.
                     */
                    reference : IReference;
                    
                
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
                     * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
                     */
                    name? : string;
                    

                    /**
                     * Extensions for name
                     */
                    _name? : IElement;
                    

                    /**
                     * A description of the reason that a resource has been included in the implementation guide.
                     */
                    description? : string;
                    

                    /**
                     * Extensions for description
                     */
                    _description? : IElement;
                    

                    /**
                     * If true or a reference, indicates the resource is an example instance.  If a reference is present, indicates that the example is an example of the specified profile.
                     */
                    exampleBoolean? : boolean;
                    

                    /**
                     * Extensions for exampleBoolean
                     */
                    _exampleBoolean? : IElement;
                    

                    /**
                     * If true or a reference, indicates the resource is an example instance.  If a reference is present, indicates that the example is an example of the specified profile.
                     */
                    exampleCanonical? : string;
                    

                    /**
                     * Extensions for exampleCanonical
                     */
                    _exampleCanonical? : IElement;
                    

                    /**
                     * Reference to the id of the pack this resource appears in.
                     */
                    package? : string;
                    

                    /**
                     * Extensions for package
                     */
                    _package? : IElement;
                    
            }
        


        export const RTTI_ImplementationGuide_Resource: t.Type<IImplementationGuide_Resource> = t.recursion( 'IImplementationGuide_Resource', () =>
            t.intersection([
                
        t.type({
           reference: RTTI_Reference
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
description: t.string,
_description: RTTI_Element,
exampleBoolean: t.boolean,
_exampleBoolean: RTTI_Element,
exampleCanonical: t.string,
_exampleCanonical: RTTI_Element,
package: t.string,
_package: RTTI_Element
        })
        
            ])
        );
        

        