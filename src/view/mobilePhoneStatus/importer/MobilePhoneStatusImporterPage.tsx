import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/mobilePhoneStatus/importer/mobilePhoneStatusImporterActions';
import fields from 'src/modules/mobilePhoneStatus/importer/mobilePhoneStatusImporterFields';
import selectors from 'src/modules/mobilePhoneStatus/importer/mobilePhoneStatusImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MobilePhoneStatusImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.mobilePhoneStatus.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.mobilePhoneStatus.menu'), '/mobile-phone-status'],
          [i18n('entities.mobilePhoneStatus.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.mobilePhoneStatus.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default MobilePhoneStatusImportPage;
