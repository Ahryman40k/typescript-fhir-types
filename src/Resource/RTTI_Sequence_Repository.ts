
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum Sequence_RepositoryTypeKind {
                directlink = 'directlink',
openapi = 'openapi',
login = 'login',
oauth = 'oauth',
other = 'other'
            }
const Sequence_RepositoryTypeKindKeys = t.keyof({
                [Sequence_RepositoryTypeKind.directlink]: null,
[Sequence_RepositoryTypeKind.openapi]: null,
[Sequence_RepositoryTypeKind.login]: null,
[Sequence_RepositoryTypeKind.oauth]: null,
[Sequence_RepositoryTypeKind.other]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: Sequence_RepositoryTypeKindKeys,
_type: RTTI_Element,
url: t.string,
_url: RTTI_Element,
name: t.string,
_name: RTTI_Element,
datasetId: t.string,
_datasetId: RTTI_Element,
variantsetId: t.string,
_variantsetId: RTTI_Element,
readsetId: t.string,
_readsetId: RTTI_Element
        });
        

        export var RTTI_Sequence_Repository:any = t.intersection([mandatory, partial]);
        

export type ISequence_Repository = t.TypeOf<typeof RTTI_Sequence_Repository>;
        
        