import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/preferedBookingChannel/importer/preferedBookingChannelImporterActions';
import fields from 'src/modules/preferedBookingChannel/importer/preferedBookingChannelImporterFields';
import selectors from 'src/modules/preferedBookingChannel/importer/preferedBookingChannelImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PreferedBookingChannelImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.preferedBookingChannel.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.preferedBookingChannel.menu'), '/prefered-booking-channel'],
          [i18n('entities.preferedBookingChannel.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.preferedBookingChannel.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PreferedBookingChannelImportPage;
