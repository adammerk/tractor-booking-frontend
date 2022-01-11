import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/bookings/importer/bookingsImporterActions';
import fields from 'src/modules/bookings/importer/bookingsImporterFields';
import selectors from 'src/modules/bookings/importer/bookingsImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function BookingsImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.bookings.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.bookings.menu'), '/bookings'],
          [i18n('entities.bookings.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.bookings.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default BookingsImportPage;
