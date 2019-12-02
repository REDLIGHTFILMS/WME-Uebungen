<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="no"/>
  <xsl:template match="/">
 
        <table id="data" border="1" class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Country</th>
              <th>birth rate / 1000</th>
              <th>cell phones / 100</th>
              <th>children / woman</th>
              <th>electric usage</th>
              <th>internet usage</th>
          </tr>
          </thead>
          <tbody>
          <xsl:for-each select="Countries/country">
            <tr>
              <td>
                <xsl:value-of select="id_"/>
              </td>
              <td>
                <xsl:value-of select="name________________"/>
              </td>
              <td>
                <xsl:value-of select="birth_rate_per_1000"/>
              </td>
              <td>
                <xsl:value-of select="cell_phones_per_100"/>
              </td>
              <td>
                <xsl:value-of select="children_per_woman"/>
              </td>
              <td>
                <xsl:value-of select="electricity_consumption_per_capita"/>
              </td>
              <td>
                <xsl:value-of select="internet_user_per_100"/>
              </td>
            </tr>
          </xsl:for-each>
          </tbody>
        </table>

  </xsl:template>
</xsl:stylesheet>