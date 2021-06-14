import React from "react";
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
} from "native-base";

export default function FooterGH() {
  return (
    <Footer>
      <FooterTab>
        <Button vertical>
          <Icon name="create" type="Ionicons" />
          <Text>POST</Text>
        </Button>
        <Button vertical>
          <Icon name="reader" type="Ionicons" />
          <Text>GET</Text>
        </Button>
        <Button vertical>
          <Icon name="home" type="Entypo" />
          <Text>Home</Text>
        </Button>
        <Button vertical>
          <Icon active name="navigate" />
          <Text>AAA</Text>
        </Button>
        <Button vertical>
          <Icon name="person" />
          <Text>AAA</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}

// Colores
// Azul RGB: #232C77
// Blanco RGB: #FFFFFF
// Gris RGB: #989696
