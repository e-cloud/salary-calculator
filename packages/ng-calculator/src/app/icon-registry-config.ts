/**
 * Copyright 2018 Quest Software and/or its affiliates
 * and other contributors as indicated by the @author tags.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface LiteralIconRegistry {
  name: string;
  literal: string;
}

export interface NormalIconRegistry {
  name: string;
  url: string;
}

export interface LiteralIconNamespaceRegistry extends LiteralIconRegistry {
  namespace: string;
}

export interface NormalIconNamespaceRegistry extends NormalIconRegistry {
  namespace: string;
}

export interface IconRegistryItem {
  name: string;
  literal?: string;
  url?: string;
  namespace?: string;
}

export const ICON_REGISTRY_CONFIG: IconRegistryItem[] = [
  {
    name: 'calculator',
    url: 'assets/img/calculator.svg',
  },
];
