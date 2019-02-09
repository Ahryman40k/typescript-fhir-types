
        import { Code } from '../Scalar/Code';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { ResourceList } from '../Union/ResourceList';
import { SubstanceReferenceInformation_Classification } from '../Resource/SubstanceReferenceInformation_Classification';
import { SubstanceReferenceInformation_Gene } from '../Resource/SubstanceReferenceInformation_Gene';
import { SubstanceReferenceInformation_GeneElement } from '../Resource/SubstanceReferenceInformation_GeneElement';
import { SubstanceReferenceInformation_Relationship } from '../Resource/SubstanceReferenceInformation_Relationship';
import { SubstanceReferenceInformation_Target } from '../Resource/SubstanceReferenceInformation_Target';
import { Uri } from '../Scalar/Uri';

        

        /**
         * Todo. 
         */
        export class SubstanceReferenceInformation  {

            constructor() {
                
            }

            
                /**
                 * This is a SubstanceReferenceInformation resource
                 */
                resourceType: string = 'SubstanceReferenceInformation;'
                

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
                 * Todo.
                 */
                comment? : string;
                

                /**
                 * Extensions for comment
                 */
                _comment? : Element;
                

                /**
                 * Todo.
                 */
                gene? : SubstanceReferenceInformation_Gene[];
                

                /**
                 * Todo.
                 */
                geneElement? : SubstanceReferenceInformation_GeneElement[];
                

                /**
                 * Todo.
                 */
                classification? : SubstanceReferenceInformation_Classification[];
                

                /**
                 * Todo.
                 */
                relationship? : SubstanceReferenceInformation_Relationship[];
                

                /**
                 * Todo.
                 */
                target? : SubstanceReferenceInformation_Target[];
                
        }
        