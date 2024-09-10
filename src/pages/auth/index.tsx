import {Form, Modal, TextContainer, Wrapper} from "./style";
import {Button} from "@mantine/core";
import {useForm} from "react-hook-form";
import {Input} from "@/components/input/input.tsx";
import {InputPassword} from "@/components/input/input-password.tsx";

const Auth = () => {
    const form = useForm()
    return (
        <Wrapper>
            <Modal>
                <TextContainer>
                    <h1>Tizimiga kirish</h1>
                    <h3>
                        Tizimiga kirish uchun login va paroldan
                        foydalaning.
                    </h3>
                </TextContainer>
                <Form>
                    <Input
                        className="input"
                        control={form.control}
                        name="username"
                        placeholder="Login"
                    />
                    <InputPassword
                        className="input"
                        control={form.control}
                        name="password"
                        placeholder="Password"
                    />
                    <Button
                        radius={10}
                        fullWidth
                        h={38}
                    >
                        Kirish
                    </Button>
                </Form>
            </Modal>
        </Wrapper>
    );
};

export default Auth;
