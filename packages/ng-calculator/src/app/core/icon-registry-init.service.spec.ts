import { describe, it, expect, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconRegistryInitService } from './icon-registry-init.service';
import { IconRegistryItem } from '../icon-registry-config';

describe('IconRegistryInitService 图标注册服务测试', () => {
  const mockIconRegistry = {
    addSvgIconLiteral: vi.fn(),
    addSvgIconLiteralInNamespace: vi.fn(),
    addSvgIcon: vi.fn(),
    addSvgIconInNamespace: vi.fn(),
  };

  const mockSanitizer = {
    bypassSecurityTrustHtml: vi.fn((val: string) => `safeHtml:${val}`),
    bypassSecurityTrustResourceUrl: vi.fn((val: string) => `safeUrl:${val}`),
  };

  function setup() {
    vi.clearAllMocks();
    TestBed.configureTestingModule({
      providers: [
        IconRegistryInitService,
        { provide: MatIconRegistry, useValue: mockIconRegistry },
        { provide: DomSanitizer, useValue: mockSanitizer },
      ],
    });
    return TestBed.inject(IconRegistryInitService);
  }

  it('传入合法的图标注册表时，应正确注册字面量图标与 URL 图标', () => {
    // Arrange
    const service = setup();
    const registry: IconRegistryItem[] = [
      { name: 'logo', literal: '<svg></svg>' },
      { name: 'help', namespace: 'custom', literal: '<svg>help</svg>' },
      { name: 'icon-url', url: 'assets/icon.svg' },
      { name: 'ns-url', namespace: 'custom', url: 'assets/ns.svg' },
    ];

    // Act
    service.init(registry);

    // Assert
    expect(mockIconRegistry.addSvgIconLiteral).toHaveBeenCalledWith(
      'logo',
      'safeHtml:<svg></svg>',
    );
    expect(mockIconRegistry.addSvgIconLiteralInNamespace).toHaveBeenCalledWith(
      'custom',
      'help',
      'safeHtml:<svg>help</svg>',
    );
    expect(mockIconRegistry.addSvgIcon).toHaveBeenCalledWith(
      'icon-url',
      'safeUrl:assets/icon.svg',
    );
    expect(mockIconRegistry.addSvgIconInNamespace).toHaveBeenCalledWith(
      'custom',
      'ns-url',
      'safeUrl:assets/ns.svg',
    );
  });

  it('传入非数组时应抛出类型错误', () => {
    // Arrange
    const service = setup();

    // Act & Assert
    expect(() => {
      service.init(null as unknown as IconRegistryItem[]);
    }).toThrow(TypeError);
  });
});
