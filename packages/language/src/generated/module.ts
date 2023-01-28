/******************************************************************************
 * This file was generated by langium-cli 1.0.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import { LangiumGeneratedServices, LangiumGeneratedSharedServices, LangiumSharedServices, LangiumServices, LanguageMetaData, Module } from 'langium';
import { ZModelAstReflection } from './ast';
import { ZModelGrammar } from './grammar';

export const ZModelLanguageMetaData: LanguageMetaData = {
    languageId: 'zmodel',
    fileExtensions: ['.zmodel'],
    caseInsensitive: false
};

export const ZModelGeneratedSharedModule: Module<LangiumSharedServices, LangiumGeneratedSharedServices> = {
    AstReflection: () => new ZModelAstReflection()
};

export const ZModelGeneratedModule: Module<LangiumServices, LangiumGeneratedServices> = {
    Grammar: () => ZModelGrammar(),
    LanguageMetaData: () => ZModelLanguageMetaData,
    parser: {}
};