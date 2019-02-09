
        import { Extension } from '../Resource/Extension';
import { ImplementationGuide_Package } from '../Resource/ImplementationGuide_Package';
import { ImplementationGuide_Page } from '../Resource/ImplementationGuide_Page';
import { ImplementationGuide_Parameter } from '../Resource/ImplementationGuide_Parameter';
import { ImplementationGuide_Resource } from '../Resource/ImplementationGuide_Resource';
import { ImplementationGuide_Template } from '../Resource/ImplementationGuide_Template';

        

        /**
         * A set of rules of how FHIR is used to solve a particular problem. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. 
         */
        export class ImplementationGuide_Definition  {

            constructor() {
                this.resource = new Array<ImplementationGuide_Resource>();
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * A logical group of resources. Logical groups can be used when building pages.
                 */
                package? : ImplementationGuide_Package[];
                

                /**
                 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
                 */
                resource : ImplementationGuide_Resource[];
                

                /**
                 * A page / section in the implementation guide. The root page is the implementation guide home page.
                 */
                page? : ImplementationGuide_Page;
                

                /**
                 * Defines how IG is built by tools.
                 */
                parameter? : ImplementationGuide_Parameter[];
                

                /**
                 * A template for building resources.
                 */
                template? : ImplementationGuide_Template[];
                
        }
        