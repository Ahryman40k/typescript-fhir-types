import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Bundle_Link, IBundle_Link} from './RTTI_Bundle_Link';
import {RTTI_uri} from '../Scalar/RTTI_uri';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_ResourceList, IResourceList} from '../Union/RTTI_ResourceList';
import {RTTI_Bundle_Search, IBundle_Search} from './RTTI_Bundle_Search';
import {RTTI_Bundle_Request, IBundle_Request} from './RTTI_Bundle_Request';
import {RTTI_Bundle_Response, IBundle_Response} from './RTTI_Bundle_Response';

export interface IBundle_Entry {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * A series of links that provide context to this entry.
   */
  link?: IBundle_Link[];

  /**
   * The Absolute URL for the resource.  The fullUrl SHALL NOT disagree with the id in the resource - i.e. if the fullUrl is not a urn:uuid, the URL shall be version-independent URL consistent with the Resource.id. The fullUrl is a version independent reference to the resource. The fullUrl element SHALL have a value except that:
   * fullUrl can be empty on a POST (although it does not need to when specifying a temporary id for reference in the bundle)
   * Results from operations might involve resources that are not identified.
   */
  fullUrl?: string;

  /**
   * Extensions for fullUrl
   */
  _fullUrl?: IElement;

  /**
   * The Resource for the entry. The purpose/meaning of the resource is determined by the Bundle.type.
   */
  resource?: IResourceList;

  /**
   * Information about the search process that lead to the creation of this entry.
   */
  search?: IBundle_Search;

  /**
   * Additional information about how this entry should be processed as part of a transaction or batch.  For history, it shows how the entry was processed to create the version contained in the entry.
   */
  request?: IBundle_Request;

  /**
   * Indicates the results of processing the corresponding 'request' entry in the batch or transaction being responded to or what the results of an operation where when returning history.
   */
  response?: IBundle_Response;
}

export const RTTI_Bundle_Entry: t.Type<IBundle_Entry> = t.recursion(
  'IBundle_Entry',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      link: t.array(RTTI_Bundle_Link),
      fullUrl: RTTI_uri,
      _fullUrl: RTTI_Element,
      resource: RTTI_ResourceList,
      search: RTTI_Bundle_Search,
      request: RTTI_Bundle_Request,
      response: RTTI_Bundle_Response,
    }),
);
