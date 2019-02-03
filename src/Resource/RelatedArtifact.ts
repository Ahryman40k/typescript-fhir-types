
        import { Attachment } from '../Resource/Attachment';
import { Canonical } from '../Scalar/Canonical';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Url } from '../Scalar/Url';

        export enum RelatedArtifactTypeKind {
                documentation,
justification,
citation,
predecessor,
successor,
derivedFrom,
dependsOn,
composedOf
            }

        /**
         * Related artifacts such as additional documentation, justification, or bibliographic references. 
         */
        export class RelatedArtifact  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                Id? : String;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * The type of relationship to the related artifact.
                 */
                Type? : RelatedArtifactTypeKind;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
                 */
                Display? : String;
                

                /**
                 * Extensions for display
                 */
                _display? : Element;
                

                /**
                 * A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format.
                 */
                Citation? : String;
                

                /**
                 * Extensions for citation
                 */
                _citation? : Element;
                

                /**
                 * A url for the artifact that can be followed to access the actual content.
                 */
                Url? : Url;
                

                /**
                 * Extensions for url
                 */
                _url? : Element;
                

                /**
                 * The document being referenced, represented as an attachment. This is exclusive with the resource element.
                 */
                Document? : Attachment;
                

                /**
                 * The related resource, such as a library, value set, profile, or other knowledge resource.
                 */
                Resource? : Canonical;
                
        }
        