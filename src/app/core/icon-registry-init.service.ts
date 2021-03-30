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

import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

import { IconRegistryItem } from '../icon-registry-config';

@Injectable({
  providedIn: 'root',
})
export class IconRegistryInitService {
  constructor(private iconService: MatIconRegistry, private domSanitize: DomSanitizer) {
  }

  init(registry: IconRegistryItem[]) {
    if (!Array.isArray(registry)) {
      throw new TypeError('Invalid input for IconRegistryInitService#init');
    }

    registry.forEach(item => {
      if (item.literal) {
        if (item.namespace) {
          this.iconService.addSvgIconLiteralInNamespace(
            item.namespace,
            item.name,
            this.domSanitize.bypassSecurityTrustHtml(item.literal),
          );
        } else {
          this.iconService.addSvgIconLiteral(item.name, this.domSanitize.bypassSecurityTrustHtml(item.literal));
        }
      }

      if (item.url) {
        if (item.namespace) {
          this.iconService.addSvgIconInNamespace(
            item.namespace,
            item.name,
            this.domSanitize.bypassSecurityTrustResourceUrl(item.url),
          );
        } else {
          this.iconService.addSvgIcon(item.name, this.domSanitize.bypassSecurityTrustResourceUrl(item.url));
        }
      }
    });
  }
}
