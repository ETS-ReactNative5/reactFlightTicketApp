import { Text as T } from "react-native";
import styled from "styled-components";
import {
  compose,
  color,
  size,
  typography,
  space,
  flexbox,
} from "styled-system";

const Text = styled(T)(compose(color, size, typography, space, flexbox));

export default Text;
