
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Attachment} from './RTTI_Attachment';

export enum RelatedArtifactTypeKind {
                documentation = 'documentation',
justification = 'justification',
citation = 'citation',
predecessor = 'predecessor',
successor = 'successor',
derivedFrom = 'derivedFrom',
dependsOn = 'dependsOn',
composedOf = 'composedOf'
            }
const RelatedArtifactTypeKindKeys = t.keyof({
                [RelatedArtifactTypeKind.documentation]: null,
[RelatedArtifactTypeKind.justification]: null,
[RelatedArtifactTypeKind.citation]: null,
[RelatedArtifactTypeKind.predecessor]: null,
[RelatedArtifactTypeKind.successor]: null,
[RelatedArtifactTypeKind.derivedFrom]: null,
[RelatedArtifactTypeKind.dependsOn]: null,
[RelatedArtifactTypeKind.composedOf]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
type: RelatedArtifactTypeKindKeys,
_type: RTTI_Element,
display: t.string,
_display: RTTI_Element,
citation: t.string,
_citation: RTTI_Element,
url: t.string,
_url: RTTI_Element,
document: RTTI_Attachment,
resource: t.string
        });
        

        export var RTTI_RelatedArtifact:any = t.intersection([mandatory, partial]);
        

export type IRelatedArtifact = t.TypeOf<typeof RTTI_RelatedArtifact>;
        
        