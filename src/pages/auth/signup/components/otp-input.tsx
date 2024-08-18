import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";

const SignupOTPInput = ()=>{
    return (
        <InputOTP maxLength={4}>
            <InputOTPGroup>
                <InputOTPSlot index={0}/>
                <InputOTPSeparator/>
                <InputOTPSlot index={1}/>
                <InputOTPSeparator/>
                <InputOTPSlot index={2}/>
                <InputOTPSeparator/>
                <InputOTPSlot index={3}/>
            </InputOTPGroup>
        </InputOTP>
    )
}

export default SignupOTPInput;