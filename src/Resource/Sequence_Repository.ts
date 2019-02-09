
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Uri } from '../Scalar/Uri';

        export enum SequenceRepositoryTypeKind {
                directlink,
openapi,
login,
oauth,
other
            }

        /**
         * Raw data describing a biological sequence. 
         */
        export class Sequence_Repository  {

            constructor() {
                
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
                 * Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.
                 */
                type? : SequenceRepositoryTypeKind;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * URI of an external repository which contains further details about the genetics data.
                 */
                url? : Uri;
                

                /**
                 * Extensions for url
                 */
                _url? : Element;
                

                /**
                 * URI of an external repository which contains further details about the genetics data.
                 */
                name? : string;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.
                 */
                datasetId? : string;
                

                /**
                 * Extensions for datasetId
                 */
                _datasetId? : Element;
                

                /**
                 * Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.
                 */
                variantsetId? : string;
                

                /**
                 * Extensions for variantsetId
                 */
                _variantsetId? : Element;
                

                /**
                 * Id of the read in this external repository.
                 */
                readsetId? : string;
                

                /**
                 * Extensions for readsetId
                 */
                _readsetId? : Element;
                
        }
        